export function InputBox(props: InputBoxProps) {
  return (
    <input
      type={props.inputType}
      value={props.value}
      onChange={props.onChange}
      className="appearance-none text-center bg-gray-50 w-3/4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w- p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    ></input>
  );
}

export interface InputBoxProps {
  inputType: string;
  value: any;
  onChange: any;
}
