import styles from './App.module.css';
import Navbar from './components/Navbar'
import AddBankItem from './components/AddBankItem'
import {bank_store} from './functions/data.js'
import {For, createSignal, Show} from 'solid-js'
import '@picocss/pico'


function App() {
  const [bank, set_bank] = bank_store()
  const [show_add, set_show_add] = createSignal(false)
  return (
    <main>
      <Navbar />
      <Show when={show_add()}>
        <AddBankItem set_bank={set_bank}/>
      </Show>
      <button onclick={() => set_show_add(!show_add()) }>add</button>
      <For each={bank}>
        {(item, i) => (
          <p>{item.description}</p>
          )} 
      </For>
    </main>
  );
}

export default App;
