import React from 'react'
import { render } from 'react-testing-library'
import Pagination from './Pagination'

describe('Button', () => {
    it('renders without crashing', () => {
        const { container } = render(
            <Pagination
                totalPages={20}
                currentPage={1}
                handlePageClick={() => Promise.resolve()}
            />
        )
        expect(container.firstChild).toBeInTheDocument()
        container.firstChild && expect(container.firstChild.nodeName).toBe('UL')
    })
})
