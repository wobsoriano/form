import { assertType } from 'vitest'
import * as React from 'react'
import { useForm } from '../useForm'

it('should type state.value properly', () => {
  function Comp() {
    const form = useForm({
      defaultValues: {
        firstName: 'test',
        age: 84,
      },
    } as const)

    return (
      <form.Provider>
        <form.Field
          name="firstName"
          children={(field) => {
            assertType<'test'>(field.state.value)
          }}
        />
        <form.Field
          name="age"
          children={(field) => {
            assertType<84>(field.state.value)
          }}
        />
      </form.Provider>
    )
  }
})

it('should type onChange properly', () => {
  function Comp() {
    const form = useForm({
      defaultValues: {
        firstName: 'test',
        age: 84,
      },
    } as const)

    return (
      <form.Provider>
        <form.Field
          name="firstName"
          onChange={(val) => {
            assertType<'test'>(val)
            return null
          }}
          children={(field) => null}
        />
        <form.Field
          name="age"
          onChange={(val) => {
            assertType<84>(val)
            return null
          }}
          children={(field) => null}
        />
      </form.Provider>
    )
  }
})
