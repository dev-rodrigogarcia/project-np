import 'moment-timezone'

function camelCaseToString(str: string) {
   const result = str.replace(/([A-Z])/g, ' $1')
   return result.charAt(0).toUpperCase() + result.slice(1)
}

function underscoreToSpace(str: string) {
   return str
      .toString()
      .split('_')
      .join(' ')
}

function hyphenToSpace(str: string) {
   return str
      .toString()
      .split('-')
      .join(' ')
}

function longerNameFormatter(str: string, size: number) {
   return str && str.length > size ? str.substring(0, size) + ' ... ' : str
}

const replaceInputName = (element: { field: string; message: string }) => {
   return element.message.replace(
      element.field,
      camelCaseToString(element.field),
   )
}

export {
   camelCaseToString,
   underscoreToSpace,
   longerNameFormatter,
   hyphenToSpace,
   replaceInputName,
}
