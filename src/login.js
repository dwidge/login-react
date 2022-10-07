import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useLogin = (url, key, [token, tokenSet] = useState()) => {
	const [searchParams, setSearchParams] = useSearchParams()

	const login = () => {
		window.location.replace(url)
	}
	const logout = () => tokenSet()

	useEffect(() => {
		if (searchParams.has(key)) {
			const t = searchParams.get(key)
			if (t) {
				searchParams.delete(key)
				setSearchParams(searchParams)
				tokenSet(t)
			}
		}
	}, [key, searchParams, setSearchParams])

	return [login, logout, token, tokenSet]
}
