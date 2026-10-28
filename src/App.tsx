import './App.css'
import { useState } from 'react';
import { Button } from './Button';
import { Drawer } from './Drawer';

function App() {

  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

    const [isAccountOpen, setIsAccountOpen] = useState(false);
    const [isChatsOpen, setIsChatsOpen] = useState(false);

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
                    onClick={() => setIsAccountOpen(true)}
                    text='Account'
                />
                 <Drawer
                     isOpen={isAccountOpen}
                     onClose={() => setIsAccountOpen(false)}
                 >
                    <h2>Меню</h2>
                     <p>Тут может быть что угодно.</p>
                     <Button
                     className='CloseAccountBtn'
                     onClick={() => setIsAccountOpen(false)}
                     text='Close'
                     />
                 </Drawer>
          </div>

          <div className="ChatBunker">
              <Button
                  className="OpenChatBunkerBtn"
                  onClick={() => setIsChatsOpen(true)}
                  text="Chats"
              />
              <Drawer
                  isOpen={isChatsOpen}
                  onClose={() => setIsChatsOpen(false)}
                  className="ChatsDrawer"
              >
                  <h2>Чаты</h2>
                  <Button
                      className="CloseChatBunkerBtn"
                      onClick={() => setIsChatsOpen(false)}
                      text="Close"
                  />
              </Drawer>
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
