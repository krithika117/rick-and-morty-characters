import './App.css';
import CharacterListComponent from './pages/CharacterList';
import ThemeProvider from './providers/ThemeProvider';
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()
function App() {
    return (
        <ThemeProvider>
            <div className="App fade-in">
                <header className="App-header">
                    <QueryClientProvider client={queryClient}>
                        <CharacterListComponent/>
                    </QueryClientProvider>
                </header>
            </div>
        </ThemeProvider>

    );
}

export default App;
