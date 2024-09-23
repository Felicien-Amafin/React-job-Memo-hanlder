import { useState } from 'react'
import DisplayPart from './components/DisplayPart';
import HeaderBlock from './components/HeaderBlock';
import Nav from './components/Nav';
import './App.css';

export default function App() {
  const [displayMode, setDisplayMode] = useState('');
  const [lists, setLists] = useState({
      awaitingRes: [],
      positiveRes: [],
      negativeRes: [],
      noRes: []
  });
  const [isNavVisible, setIsNavVisible] = useState(false);

  function handleNewMemo() {
    //Create new memo
    setDisplayMode({mode:'create'})
  }

  function handleSave(memo) {
    //Save new memo in awaitinRes list
    setLists((prevLists)=> {
      let newLists = {};

      for(const [listName, list] of Object.entries(prevLists)) {
        newLists = {
          ... newLists, 
          [listName]: listName === 'awaitingRes' ? [memo, ...list] : [...list]
        }
      }

      return newLists;
    });

    //Set ui on memo creation (ui by default)
    setDisplayMode('');
  }

  function handleDelete(memo) {
    setLists((prevLists)=> {
      let newLists = {};

      let newList;

      for(const [listName, list] of Object.entries(prevLists)) {
        
        if(memo.list === listName) {
          newList = list.filter((obj) => {
            return obj.id !== memo.id
          });
        }
      }
  
      for(const [listName, list] of Object.entries(prevLists)) {
        newLists = {
          ...newLists,
          [listName]: memo.list === listName ? [...newList] : [...list]
        }
      }
  
      return newLists;
    })
    //Set ui on the list of the deleted memo
    handleList(memo.list);
  } 

  function handleClassification(memo, selection) {
    //Update lists when memo is classified
    setLists((prevLists)=> {
      let newLists = {};

      for(const [listName, list] of Object.entries(prevLists)) {
        if((listName !== 'awaitingRes') && (listName !== selection.list)) {
          newLists = {
            ...newLists,
            [listName]: [...list]
          }
        }
      }

      const newAwaitingRes = lists.awaitingRes.filter((obj)=> {
        return obj.id !== memo.id;
      })
      const newMemo = {
        ...memo,
        list: selection.list,
        comment: selection.comment ? selection.comment.trim() : '',
        type: 'classified'
      };

      newLists = {
        ...newLists,
        awaitingRes: newAwaitingRes,
        [selection.list]: [newMemo, ...prevLists[selection.list]]
      };

      return newLists;
    })

    //Set ui on the list of the classified memo
    setDisplayMode({mode: 'list', listName: memo.list});
  }

  function handleCancellation() {
    //Set ui on memo creation (ui by default)
    setDisplayMode('');
  }

  function handleMemoDisplay(memo) {
    //Set ui on displaying memo info
    setDisplayMode({mode: 'memo', memoData: memo});
  }

  function handleList(listName) { 
    //Set ui on memo list
    setDisplayMode({mode: 'list', listName: listName});
  }

  function handleNav() {
    setIsNavVisible((prevState)=> {
      return !prevState;
    })
  }

  const memoFunc = {
    newMemo: handleNewMemo,
    saveNewMemo: handleSave,
    cancelNewMemo: handleCancellation,
    displayMemo: handleMemoDisplay,
    deleteMemo: handleDelete,
    classifyMemo: handleClassification
  }
  
  const nav = {
    newMemo: handleNewMemo,
    onList: handleList,
    onNav: handleNav,
    lists: lists
  }

  return <>
    <header>
      <HeaderBlock
        h1="My JobMemo"
        onNav={handleNav}
      />
      <Nav 
        isVisible={isNavVisible}
        nav={nav}
      />
    </header>
    <main>
      <DisplayPart
        displayMode={displayMode}
        lists={lists}
        memoFunc={memoFunc}
        onList={handleList}
      />
    </main>
  </>
}

 
