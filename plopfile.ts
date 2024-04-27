// plopfile.ts
import { NodePlopAPI } from "plop";

export default function (plop: NodePlopAPI) {
  plop.setGenerator("controller", {
    description: "application controller logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
      {
        type: "list",
        name: "directory",
        message: "select component directory",
        choices: ["atoms", "molecules", "organisms", "layouts", "pages"],
      },
      {
        type: "confirm", // 新しいプロンプトのタイプは"confirm"です
        name: "createTestFile", // テストファイルを作成するかどうかを示すフラグ
        message: "Do you want to create a test file?", // メッセージ
        default: true, // デフォルトで"yes"を選択します
      },
    ],
    actions: (data) => {
      const actions = [
        {
          type: "add",
          path: `src/components/{{directory}}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
          templateFile: "src/templates/base.hbs",
        },
        {
          type: "add",
          path: `src/components/{{directory}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx`,
          templateFile: "src/templates/stories.hbs",
        },
        {
          type: "add",
          path: `src/components/{{directory}}/{{pascalCase name}}/index.ts`,
          templateFile: "src/templates/index.hbs",
        },
        {
          type: "add",
          path: `src/components/{{directory}}/{{pascalCase name}}/{{pascalCase name}}.spec.tsx`,
          templateFile: "src/templates/spec.hbs",
        },
      ];
      return data?.createTestFile ? actions : actions.slice(0, 3);
    },
  });
}
