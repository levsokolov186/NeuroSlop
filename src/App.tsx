import './App.css'
import {useState} from "react";
import Button from "./Button.tsx";

function App() {

  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
      <>
          <div className="InputInformation">
              <input
                  className="text-input"
                  type="text"
                  value={value}
                  onChange={handleChange}
                  placeholder="Enter"
              />
          </div>
          <div className="LogsAI">

          </div>
          <div className="Account">
                <Button
                    className='OpenAccountBtn'
                    onClick={() => console.log('hello world')}
                    text='Account'/>
          </div>
          <div className="ChatBunker">
              <Button
                  className='OpenChatBunkerBtn'
                  onClick={() => console.log('open')}
                  text='chats'/>
          </div>
          <div className='sendRequest'>
              <Button
                  className='SendRequestBtn'
                  onClick={() => console.log('sendRequest')}
                  text='=>'
              />
          </div>
      </>
  )
}

export default App
