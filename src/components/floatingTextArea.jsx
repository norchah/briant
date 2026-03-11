function FloatingTextArea({label, name}) {
  return (
    <div className="relative">

      <textarea
        name={name}
        rows={4}
        placeholder=" "
        className="peer w-full resize-none border-b border-gray-300 bg-transparent py-4 text-lg outline-none transition focus:border-black"
      />

      <label
        className="
        pointer-events-none
        absolute left-0 top-4
        text-gray-500
        transition-all duration-200

        peer-focus:-top-2
        peer-focus:text-xs
        peer-focus:text-black

        peer-placeholder-shown:top-4
        peer-placeholder-shown:text-base
        "
      >
        {label}
      </label>

    </div>
  )
}

export default FloatingTextArea