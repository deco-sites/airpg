import { Signal } from "@preact/signals";

interface Props {
  /**
   * @description Placeholder text for the input field
   * @format rich-text
   */
  placeholder?: string;
}

const inputValue = Signal("");

export default function InputAndDisplay({ placeholder = "Enter text here" }: Props) {
  return (
    <div class="flex flex-col items-center justify-center w-full h-full p-4">
      <input
        class="input input-bordered w-full mb-4"
        placeholder={placeholder}
        value={inputValue.value}
        onInput={(e) => (inputValue.value = e.currentTarget.value)}
      />
      <div class="bg-base-200 p-4 rounded-lg w-full">
        <p>{inputValue.value}</p>
      </div>
    </div>
  );
}