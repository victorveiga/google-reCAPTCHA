import { useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import ReCAPTCHA from "react-google-recaptcha";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import "./App.css";

function App() {
    const [siteKey, setSiteKey] = useState(null);
    const [token, setToken] = useState(null);

    return (
        <div className="App">
            <div>
                <FormGroup>
                    <Label for="public-key-input">Chave Pública</Label>
                    <Input
                        id="public-key-input"
                        name="text"
                        placeholder="Informe a chave aqui"
                        value={siteKey}
                        onChange={(e) => setSiteKey(e.target.value)}
                    />
                </FormGroup>
            </div>
            {siteKey && (
                <div>
                    <ReCAPTCHA
                        sitekey={siteKey}
                        onChange={(value) => setToken(value)}
                    />
                </div>
            )}
            {token && <div className="mt-2">
                <Input type="textarea" rows="10" value={token} readOnly />
            </div>}
        </div>
    );
}

export default App;
