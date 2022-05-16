import { useState, useEffect, useRef, useCallback} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './src/Styles/StyleSheet.style.js'
import style from './src/Styles/Styles.style'
import GameList from './src/Tools/API/GameList';
import MixedPaint from './src/Tools/API/MixedPaint';
import Model from './src/Tools/API/Model';
import ModelComments from './src/Tools/API/ModelComment';
import PaintBrands from './src/Tools/API/PaintBrands';
import PurePaints from './src/Tools/API/PurePaints';
import StatusChart from './src/Tools/API/StatusChart';
import Users from './src/Tools/API/User.js';

export default function Test() {

  const mountedRef = useRef(false);
  const [gameList, setGameList]=useState();
  const [mixedPaints, setMixedPaints]=useState();
  const [models, setModels]=useState();
  const [modelComments, setModelComments]=useState();
  const [paintBrands, setPaintBrands]=useState();
  const [purePaints, setPurePaints]=useState();
  const [statuses, setAllStatuses]=useState();
  const [allUsers, setAllUsers]=useState();

//Test is where I keep random things and try random things out
//It's also where I can keep notes

useEffect(()=>{
  mountedRef.current = true

  getAllUsers();
  getAllStatuses();
  getAllPurePaints();
  getAllPaintBrands();
  getAllModelComments();
  getAllModels();
  getAllMixedPaints();
  getAllGameLists();

  return()=>{
    mountedRef.current=false
  }
},[getAllUsers])

const getAllGameLists=useCallback(async()=>{
  try{  
    let response=await GameList.getGameList();
    if(!response.errors){
      if(mountedRef.current) setGameList(response.data)
    }else if(response.errors){
      //Do stuff later
    }
  }catch(ex){
    console.log(ex);
  };
},[]);
const getAllMixedPaints=useCallback(async()=>{
  try{  
    let response=await MixedPaint.getMixedPaint();
    if(!response.errors){
      if(mountedRef.current) setMixedPaints(response.data)
    }else if(response.errors){
      //Do stuff later
    }
  }catch(ex){
    console.log(ex);
  };
},[]);
const getAllModels=useCallback(async()=>{
  try{  
    let response=await Model.getModels();
    if(!response.errors){
      if(mountedRef.current) setModels(response.data)
    }else if(response.errors){
      //Do stuff later
    }
  }catch(ex){
    console.log(ex);
  };
},[]);
const getAllModelComments=useCallback(async()=>{
  try{  
    let response=await ModelComments.getModelComments();
    if(!response.errors){
      if(mountedRef.current) setModelComments(response.data)
    }else if(response.errors){
      //Do stuff later
    }
  }catch(ex){
    console.log(ex);
  };
},[]);
const getAllPaintBrands=useCallback(async()=>{
  try{  
    let response=await PaintBrands.getPaintBrands();
    if(!response.errors){
      if(mountedRef.current) setPaintBrands(response.data)
    }else if(response.errors){
      //Do stuff later
    }
  }catch(ex){
    console.log(ex);
  };
},[]);
const getAllPurePaints=useCallback(async()=>{
  try{  
    let response=await PurePaints.getPurePaints();
    if(!response.errors){
      if(mountedRef.current) setPurePaints(response.data)
    }else if(response.errors){
      //Do stuff later
    }
  }catch(ex){
    console.log(ex);
  };
},[]);
const getAllStatuses=useCallback(async()=>{
  try{  
    let response=await StatusChart.getStatusChart();
    if(!response.errors){
      if(mountedRef.current) setAllStatuses(response.data)
    }else if(response.errors){
      //Do stuff later
    }
  }catch(ex){
    console.log(ex);
  };
},[]);
const getAllUsers=useCallback(async()=>{
  try{  
    let response=await Users.getUsers();
    if(!response.errors){
      if(mountedRef.current) setAllUsers(response.data)
    }else if(response.errors){
      //Do stuff later
    }
  }catch(ex){
    console.log(ex)
  }
},[])

//For the stylesheets, I had to import each one for them to work.  The second did not inherently load like React seems to do

  return (
    <View style={styles.container}>
      <Text style={style.fontCenter}>This is how you make an App</Text>
      <StatusBar style="auto" />
    </View>
  );
}
