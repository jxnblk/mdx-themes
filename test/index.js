import React from 'react'
import TestRenderer from 'react-test-renderer'
import { BaseTheme } from '../src'

const renderJSON = el => TestRenderer.create(el).toJSON()

describe('BaseTheme', () => {
  test('renders', () => {
    const json = renderJSON(
      <BaseTheme />
    )
    expect(json).toMatchSnapshot()
  })
})
