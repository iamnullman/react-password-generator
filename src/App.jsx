import { useState } from 'react'
import { toast } from 'react-hot-toast'

function App() {
  const [passwordLength, setPasswordLength] = useState(20)
  const [hasNumbers, setHasNumbers] = useState(true)
  const [hasSymbols, setHasSymbols] = useState(true)
  const [hasUppercase, setHasUppercase] = useState(true)
  const [hasLowercase, setHasLowercase] = useState(true)

  return (
    <div className='container px-16 mx-auto flex flex-col justify-center items-center mt-16'>
      <h1 className='text-4xl font-bold text-center text-gray-800'>Advanced Password Generator</h1>
      <p className='text-center text-gray-600 mt-2'>Generate a random password with the options below</p>

      <div className='rounded-lg bg-gray-100 p-3 flex items-center'>
        <span className='flex-grow'>{createAdvancedPassword({ length: passwordLength, hasNumbers: hasNumbers, hasSymbols: hasSymbols, hasUppercase: hasUppercase, hasLowercase: hasLowercase })}</span>
        <button className='text-blue-500 ml-2 cursor-pointer' onClick={() => {
          navigator.clipboard.writeText(createAdvancedPassword({ length: passwordLength, hasNumbers: hasNumbers, hasSymbols: hasSymbols, hasUppercase: hasUppercase, hasLowercase: hasLowercase }))
          toast.success('Copied to clipboard', {
            icon: <i className='fas fa-clipboard text-indigo-500 text-sm'></i>,
            className: 'font-bold text-sm'
          })
        }}>
          <i className='fas fa-clipboard'></i>
        </button>
      </div>

      <div className='flex flex-col space-y-2 justify-center items-center mt-4 gap-6'>
        <div className='flex justify-center items-center space-x-4'>
          <label className='text-gray-700 text-sm'>Password Length:<span className='text-gray-900 ml-1'>{passwordLength}</span></label>
          <input class="rounded-lg overflow-hidden appearance-none bg-zinc-200 h-3 w-128" type="range" max={64} min={12} value={passwordLength} onChange={(e) => setPasswordLength(e.target.value)} />
        </div>
        <div className='flex justify-center items-center gap-4 md:gap-8 mt-4'>
          <div className='flex justify-center items-center'>
            <input type='checkbox' className='mr-2' checked={hasNumbers} onChange={(e) => setHasNumbers(e.target.checked)} disabled={hasSymbols === false && hasUppercase === false && hasLowercase === false} />
            <label className='text-black text-sm font-bold'>123</label>
          </div>
          <div className='flex justify-center items-center'>
            <input type='checkbox' className='mr-2' checked={hasSymbols} onChange={(e) => setHasSymbols(e.target.checked)} disabled={hasNumbers === false && hasUppercase === false && hasLowercase === false} />
            <label className='text-black text-sm font-bold'>#$&</label>
          </div>
          <div className='flex justify-center items-center'>
            <input type='checkbox' className='mr-2' checked={hasUppercase} onChange={(e) => setHasUppercase(e.target.checked)} disabled={hasNumbers === false && hasSymbols === false && hasLowercase === false} />
            <label className='text-black text-sm font-bold'>ABC</label>
          </div>
          <div className='flex justify-center items-center'>
            <input type='checkbox' className='mr-2' checked={hasLowercase} onChange={(e) => setHasLowercase(e.target.checked)} disabled={hasNumbers === false && hasSymbols === false && hasUppercase === false} />
            <label className='text-black text-sm font-bold'>abc</label>
          </div>

        </div>
      </div>
      <a
        href="https://github.com/iamnullman/react-todo-list"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 hover:text-indigo-500 transition-all duration-300"
      >
        <i className="fab fa-github fa-2x"></i>
      </a>
    </div>
  )
}

export default App

function createAdvancedPassword(config) {
  const { length, hasNumbers, hasSymbols, hasUppercase, hasLowercase } = config
  let chars = ''
  let advancedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
  let numbers = '1234567890'
  let symbols = '!@#$%^&*()_+='
  let password = ''

  if (hasNumbers) {
    chars += numbers
  }

  if (hasSymbols) {
    chars += symbols
  }

  if (hasUppercase) {
    chars += advancedChars
  }

  if (hasLowercase) {
    chars += lowercaseChars
  }

  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  return password
}