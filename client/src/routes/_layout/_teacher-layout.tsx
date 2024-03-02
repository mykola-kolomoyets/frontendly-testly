import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/_teacher-layout')({
  component: () => <div>Hello /_layout/_teacher-layout!</div>
})