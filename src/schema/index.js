import fs from 'fs';
import path from 'path';

export default function() {
  const sDir = path.normalize(`${process.cwd()}/graphql`);

  const enums = fs.readdirSync(path.normalize(`${sDir}/enums`)).map((e, i) => {
    return fs.readFileSync(path.normalize(`${sDir}/enums/${e}`)).toString();
  });
  const inputs = fs.readdirSync(path.normalize(`${sDir}/inputs`)).map((e, i) => {
    return fs.readFileSync(path.normalize(`${sDir}/inputs/${e}`)).toString();
  });
  const types = fs.readdirSync(path.normalize(`${sDir}/types`)).map((e, i) => {
    return fs.readFileSync(path.normalize(`${sDir}/types/${e}`)).toString();
  });

  const mutations = fs.readdirSync(path.normalize(`${sDir}/mutations`)).map((e, i) => {
    return {
      e: e.split(".")[0],
      v: fs.readFileSync(path.normalize(`${sDir}/mutations/${e}`)).toString()
    };
  }).reduce((acc, val) => {
    acc[val.e] = val.v;
    return acc;
  },{});

  const queries = fs.readdirSync(path.normalize(`${sDir}/queries`)).map((e, i) => {
    return {
      e: e.split(".")[0],
      v: fs.readFileSync(path.normalize(`${sDir}/queries/${e}`)).toString()
    };
  }).reduce((acc, val) => {
    acc[val.e] = val.v;
    return acc;
  },{});


  const ms = Object.keys(mutations).map((e) => {
    return `${e}: M${e}`;
  }).join("\n  ");

  const qs = Object.keys(queries).map((e) => {
    return `${e}: ${e}`;
  }).join("\n  ");

  return {
    types: [
      ...enums,
      ...inputs,
      ...types,
      ...Object.keys(mutations).map((e)=>{return mutations[e];}),
      ...Object.keys(queries).map((e)=>{return queries[e];}),
    ],
    RootMutation: `
    type RootMutation {
      ${ms}
    }
    `,
    RootQuery: `
    type RootQuery {
      ${qs}
    }
    `
  }
}
