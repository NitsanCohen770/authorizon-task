interface ButtonProps {
  backgroundColor?: string;
  height: string;
  width: string;
}

export default ButtonProps;

const res =(...args)=> args.reduce((a, b) => a * b, 0);

console.log(res(4,2,.5))