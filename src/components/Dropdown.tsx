'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import React from 'react';

interface option{
  value: string | number;
  label: string;
}
interface DropdownProps {
  placeholder?: string;
  defaultOption?: option;
  options: option[];
  onValueSelected: (value: string | number) => void;
}

export default function Dropdown({ placeholder, defaultOption, options, onValueSelected }: DropdownProps) {
  const [selected, setSelected] = React.useState<string | number >();
  
  const handleItem = (value: string | number) => {
    setSelected(value);
    onValueSelected(value);
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {
            selected ? options.find(option => option.value === selected)?.label :
          placeholder ? placeholder : defaultOption?.label
          }
          <span className="material-symbols-outlined -mr-1 h-5 w-5 text-gray-400">
            stat_minus_1
          </span>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute left-1/2 z-10 mt-2 w-min-24 origin-top transform -translate-x-1/2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {options.map((option) => (
            <MenuItem key={option.value} onClick={ () => handleItem(option.value)} >
              <p className="flex justify-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                {option.label}
              </p>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  )
}
