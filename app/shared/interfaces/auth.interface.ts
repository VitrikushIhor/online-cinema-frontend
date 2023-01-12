import { NextPage } from 'next'

export type TypeRoles = {
	isAdmin?: boolean
	isUser?: boolean
}

export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles

export type TypeComponentAuthFields = { Component: TypeRoles }
