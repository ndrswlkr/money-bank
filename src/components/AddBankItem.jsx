import {standard_date} from '../functions/bank_functions'


export default function AddBankItem(props) {
	const id = Date.now()
	return (
		<article>
			<label>description
				<input type="text" id="description" placeholder="describe bank item"/>
			</label>
			<label>date
				<input type="date" id="date" value={standard_date(Date.now())} />
			</label>
			<label>
				<input type="checkbox" role="switch" checked={false} id="monthly" />
				monthly
			</label>
			<label>
				<input type="checkbox" role="switch" checked={false} id="is_provision" />
				ist Rückstellung
			</label>
			<label>
				<input type="checkbox" role="switch" checked={false} id="pay_from_provision" />
				aus Rückstellung bezahlen
			</label>
		</article>

		)
}