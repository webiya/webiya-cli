import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';

const sleep = (ms: number = 2000) => new Promise(resolve => setTimeout(resolve, ms));

const options = ['rainbow', 'pulse', 'glitch', 'radar', 'neon', 'karaoke'] as const;
type animation = typeof options[number];

async function main() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'color',
      message: 'What color do you want to use?',
      choices: options
    }
  ]);

  const { color } = answers;
  const animation = chalkAnimation[color as animation]('Hello Webiya!');
  await sleep();
  animation.stop();
}

main();
