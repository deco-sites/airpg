export default function Section() {
  return (
    <div class="p-10 grid place-items-center gap-2">
      <input id="toggle" type="checkbox" class="peer hidden" />
      <label for="toggle" class="btn">Click Me</label>
      <div class="hidden peer-checked:inline">Hello!</div>
    </div>
  );
}