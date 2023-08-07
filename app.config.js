/* eslint-disable no-undef */
export default ({ config }) => ({
	...config,
	name: 'Akademia React - Native',
	slug: 'akademia-react-native',
	extra: {
		storybookEnabled: process.env.STORYBOOK_ENABLED,
	},
})
