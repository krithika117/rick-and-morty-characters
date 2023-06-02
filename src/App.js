import './App.css';
import CharacterListComponent from './pages/CharacterList';
import ThemeProvider from './providers/ThemeProvider';

function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <header className="App-header">
                    <CharacterListComponent/>
                </header>
            </div>
        </ThemeProvider>

    );
}

export default App;
