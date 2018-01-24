const fs = require('fs');

const dirComponent = './src/components/';
const dirPages = './src/pages/';
const rootCss = './src/main.scss';
const rootJs = './src/main.js';
const rootPages = './src/shared/js/pages.js';
const event = process.argv.slice(2)[0];
const params = process.argv.slice(3)[0];
const folder = dirComponent + params;
const template = `.${params} ${params} component`;

const js = `const ${params} = () => {
  console.log('${params}');
};

export { ${params} };
`;

const css = `.${params} {
  display: block;
}
`;

const templatePage = `extends ../shared/pug/layouts/main.pug
block content
\t.${params} ${params} page
`;

const templateConfig = `\t\t\tnew HtmlWebpackPlugin({
\t\t\t\tfilename: '${params}.html',
\t\t\t\ttemplate: path.resolve(__dirname, 'src/pages/${params}.pug'),
\t\t\t}),
`;

if (process.argv.length < 3 || process.argv.length > 4) {
  console.log('!!! Invalid number of commands !!!');
} else if (params.split(' ').length > 1 || params.split(',').length > 1) {
  console.log('!!! Invalid file name !!!');
} else if (event === 'c') {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
    fs.writeFileSync(`${dirComponent}${params}/${params}.pug`, template);
    fs.writeFileSync(`${dirComponent}${params}/${params}.scss`, css);
    fs.writeFileSync(`${dirComponent}${params}/${params}.js`, js);

    fs.readFile(rootJs, 'utf8', (error, data) => {
      if (error) throw error;

      const arr = data.split('\n');
      const importCurrentIndex = arr.indexOf('// @Import css');
      const callCurrentIndex = arr.indexOf('// @End call function');
      arr.splice(importCurrentIndex - 1, 0, `import { ${params} } from './components/${params}/${params}';`);
      arr.splice(callCurrentIndex - 2, 0, `  ${params}();`);
      fs.appendFileSync(rootJs, arr.join('\n'), {
        flag: 'w+',
      });
    });

    fs.readFile(rootCss, 'utf8', (error) => {
      if (error) throw error;

      fs.appendFileSync(rootCss, `@import 'components/${params}/${params}.scss';\n`);
    });

    console.log('!!! Component created !!!');
  } else {
    console.log('!!! Component exists !!!');
  }
} else if (event === 'p') {
  fs.writeFileSync(`${dirPages}/${params}.pug`, templatePage);

  fs.readFile(rootPages, 'utf8', (error, data) => {
    if (error) throw error;

    const arr = data.split(' ');
    arr.splice(arr.length - 1, 0, `'${params}.html',`);
    fs.appendFileSync(rootPages, arr.join(' '), {
      flag: 'w+',
    });
    console.log('!!! New page created !!!');
  });

  fs.readFile('./webpack.common.js', 'utf8', (error, data) => {
    if (error) throw error;

    const arr = data.split('\n');
    const currentIndex = arr.indexOf('      // @End added page template');
    arr.splice(currentIndex, 0, templateConfig);
    fs.appendFileSync('./webpack.common.js', arr.join('\n'), {
      flag: 'w+',
    });
  });
} else {
  console.log('!!! There are not enough arguments in the command !!!');
}
