import {createStore} from 'solid-js/store'

const raw_bank = [
	{
		id: 111,
		date: Date.now(),
		value: 500,
		description: "Autoversicherung",
		monthly: false,
		pay_from_provision: true,
		is_provision: false,
	},
	{
		id: 222,
		date: Date.now(),
		value: 350,
		description: "Rückstellung Auto",
		monthly: true,
		pay_from_provision: false,
		is_provision: true
	}
	]

export const bank_store = () => {
	const stored_bank = localStorage.getItem('bank')
	if (stored_bank) {
		return createStore(JSON.parse(stored_bank))
	} else {
		save_bank(raw_bank)
		return createStore(raw_bank)
	}

}
export function save_bank(bank) {
	localStorage.setItem('bank', JSON.stringify(bank))
}