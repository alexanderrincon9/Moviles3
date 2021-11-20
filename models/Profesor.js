import React from 'react';
import {Alert, StyleSheet, Text, View,
   TextInput, TouchableOpacity} from 'react-native';

export default class Persona extends React.Component
{
  constructor(props)
  {
    super(props)

    //Ahora definimos las variables para la tabla persona
    //de la Base de Datos MatriculasGrupoSabado

    this.state =
    {
      TextInput_id:'',
      TextInput_nif:'',
    }
  
  }
  
  //Ahora creamos las funciones de esta clase

  InsertarPersona = () =>
  {
    //Ahora vamos a consumir la API: APIMatriculasGrupoSabado
    fetch('http://172.16.6.1:8081/APIMatriculasGrupoSabado/Modelo/InsertarPersona.php',
    {
      method: 'POST',
      headers: 
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {  
          persona_id: this.state.TextInput_id,
          persona_nif: this.state.TextInput_nif,
          persona_nombre: this.state.TextInput_nombre,
          persona_apellido1: this.state.TextInput_apellido1,
          persona_apellido2: this.state.TextInput_apellido2,
          persona_ciudad: this.state.TextInput_ciudad,
          persona_clave: this.state.TextInput_clave,
          persona_direccion: this.state.TextInput_direccion,
          persona_telefono: this.state.TextInput_telefono,
          persona_fecha_nacimiento: this.state.TextInput_fecha_nacimiento,
          persona_sexo: this.state.TextInput_sexo,
          persona_tipo: this.state.TextInput_tipo            

        }
      )
    }
    ).then((response) => response.json())
    .then((responseJson) => 
      {
        alert(responseJson);

      }).catch((error) =>
      {
        console.error(error);
      }
      );
  }

  ActualizarPersona = () =>
  {
    //Ahora vamos a codificar la función actualizar para
    //consumir la API
    fetch('http://172.16.6.1:8081/APIMatriculasGrupoSabado/Modelo/ActualizarPersona.php',
      {
        method: 'PUT',
        headers:
        {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(
        {
          persona_id: this.state.TextInput_id,
          persona_nif: this.state.TextInput_nif,
          persona_nombre: this.state.TextInput_nombre,
          persona_apellido1: this.state.TextInput_apellido1,
          persona_apellido2: this.state.TextInput_apellido2,
          persona_ciudad: this.state.TextInput_ciudad,
          persona_clave: this.state.TextInput_clave,
          persona_direccion: this.state.TextInput_direccion,
          persona_telefono: this.state.TextInput_telefono,
          persona_fecha_nacimiento: this.state.TextInput_fecha_nacimiento,
          persona_sexo: this.state.TextInput_sexo,
          persona_tipo: this.state.TextInput_tipo            
        }
        )
      }
    ).then((response) => response.json())
    .then((responseJson) => 
      {
        alert('El registro ha sido actualizado');
      }
    ).catch((error) => 
    {
      console.error(error);
    }
    )
  }

  BorrarPersona = () =>
  {
   //Ahora vamos a codificar la función borrar para
    //consumir la API
    fetch('http://172.16.6.1:8081/APIMatriculasGrupoSabado/Modelo/BorrarPersona.php',
      {
        method: 'DELETE',
        headers:
        {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(
        {
          persona_id: this.state.TextInput_id         
        }
        )
      }
    ).then((response) => response.json())
    .then((responseJson) => 
      {
        alert('El registro ha sido borrado');
      }
    ).catch((error) => 
    {
      console.error(error);
    }
    )
  }

  ListarTodasLasPersonas = () =>
  {
//Ahora vamos a codificar la función ListarxId para
    //consumir la API
    fetch('http://172.16.6.1:8081/APIMatriculasGrupoSabado/Modelo/ListarTodasLasPersonas.php',
      {
        method: 'GET',
        headers:
        {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(
        {
          persona_id: this.state.TextInput_id,
          persona_nif: this.state.TextInput_nif,
          persona_nombre: this.state.TextInput_nombre,
          persona_apellido1: this.state.TextInput_apellido1,
          persona_apellido2: this.state.TextInput_apellido2,
          persona_ciudad: this.state.TextInput_ciudad,
          persona_clave: this.state.TextInput_clave,
          persona_direccion: this.state.TextInput_direccion,
          persona_telefono: this.state.TextInput_telefono,
          persona_fecha_nacimiento: this.state.TextInput_fecha_nacimiento,
          persona_sexo: this.state.TextInput_sexo,
          persona_tipo: this.state.TextInput_tipo        
        }
        )
      }
    ).then((response) => response.json())
    .then((responseJson) => 
    {
      this.state(
        {
          TextInput_id: responseJson[0]['id'],
          TextInput_nif: responseJson[0]['nif'],
          TextInput_nombre: responseJson[0]['nombre'],
          TextInput_apellido1: responseJson[0]['apellido1'],
          TextInput_apellido2: responseJson[0]['apellido2'],
          TextInput_ciudad: responseJson[0]['ciudad'],
          TextInput_clave: responseJson[0]['clave'],
          TextInput_direccion: responseJson[0]['direccion'],
          TextInput_telefono: responseJson[0]['telefono'],
          TextInput_fecha_nacimiento: responseJson[0]['fecha_nacimiento'],
          TextInput_sexo: responseJson[0]['sexo'],
          TextInput_tipo: responseJson[0]['tipo'] 
        }
      )
    }
    )
  }

  ListarPersonaxId = () =>
  {
    //Ahora vamos a codificar la función ListarxId para
    //consumir la API
    fetch('http://172.16.6.1:8081/APIMatriculasGrupoSabado/Modelo/ListarPersonaxid.php',
      {
        method: 'GET',
        headers:
        {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(
        {
          persona_id: this.state.TextInput_id,
          persona_nif: this.state.TextInput_nif,
          persona_nombre: this.state.TextInput_nombre,
          persona_apellido1: this.state.TextInput_apellido1,
          persona_apellido2: this.state.TextInput_apellido2,
          persona_ciudad: this.state.TextInput_ciudad,
          persona_clave: this.state.TextInput_clave,
          persona_direccion: this.state.TextInput_direccion,
          persona_telefono: this.state.TextInput_telefono,
          persona_fecha_nacimiento: this.state.TextInput_fecha_nacimiento,
          persona_sexo: this.state.TextInput_sexo,
          persona_tipo: this.state.TextInput_tipo        
        }
        )
      }
    ).then((response) => response.json())
    .then((responseJson) => 
    {
      this.state(
        {
          TextInput_nif: responseJson[0]['nif'],
          TextInput_nombre: responseJson[0]['nombre'],
          TextInput_apellido1: responseJson[0]['apellido1'],
          TextInput_apellido2: responseJson[0]['apellido2'],
          TextInput_ciudad: responseJson[0]['ciudad'],
          TextInput_clave: responseJson[0]['clave'],
          TextInput_direccion: responseJson[0]['direccion'],
          TextInput_telefono: responseJson[0]['telefono'],
          TextInput_fecha_nacimiento: responseJson[0]['fecha_nacimiento'],
          TextInput_sexo: responseJson[0]['sexo'],
          TextInput_tipo: responseJson[0]['tipo'] 
        }
      )
    }
    )
  }


  render()
  {
    return (

      <View></View>

    );

  }

}

const MisEstilos = StyleSheet.create (
  {


  }
)