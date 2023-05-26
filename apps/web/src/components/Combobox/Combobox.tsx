import { useState } from 'react'
import { Combobox as SuiCombobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

type Person = {
  id: number
  name: string
}

const people: Person[] = [
  { id: 1, name: 'Wade Cooper' },
  { id: 1, name: 'Mike Tyson' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
]

const Combobox = () => {
  const [selected, setSelected] = useState(people[0])
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter(person =>
          person.name.toLowerCase().includes(query.toLowerCase()),
        )

  const composeString = (name: string, nameQuery: string): any => {
    const searchIndex: number = name
      .toLowerCase()
      .indexOf(nameQuery.toLowerCase())
    const queryEndIndex: number = searchIndex + nameQuery.length
    return (
      <>
        {searchIndex > -1 && name.slice(0, searchIndex)}
        <strong>{name.slice(searchIndex, queryEndIndex)}</strong>
        {name.slice(queryEndIndex)}
      </>
    )
  }

  return (
    <div>
      <SuiCombobox value={selected} onChange={setSelected} nullable>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <SuiCombobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(person: Person) => person?.name}
              onChange={event => setQuery(event.target.value)}
            />
            <SuiCombobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </SuiCombobox.Button>
          </div>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            afterLeave={() => setQuery('')}
          >
            <SuiCombobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map(person => (
                  <SuiCombobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-teal-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={person}
                  >
                    {({ selected: selected2, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected2 ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {composeString(person.name, query)}
                        </span>
                        {selected2 ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </SuiCombobox.Option>
                ))
              )}
            </SuiCombobox.Options>
          </Transition>
        </div>
      </SuiCombobox>
    </div>
  )
}

export default Combobox
