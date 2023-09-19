export default function classNames(...args) {
  return args
    .reduce((acc, val) => {
      if (typeof val === "string") {
        return acc.concat(val.split(" "));
      }
      return acc.concat(Object.values(val));
    }, [])
    .join(" ");
}
// w-full px-6 py-4 --> [w-full, px-6, py-4] --> "w-full px-6 py-4"
// Object { "w-full": true, "px-6": true, "py-4": true } --> ["w-full", "px-6", "py-4"] --> "w-full px-6 py-4"

// e.g:
//  className={classNames(
//   "inline-block text-sm font-medium cursor-pointer text-text2 dark:text-text4",
//   className
// )}
// ==== to below
// className={`inline-block text-sm font-medium cursor-pointer text-text2 dark:text-text4 ${className}`}
