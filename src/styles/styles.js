// Importa os conteúdos necessários para o funcionamento correto do site
import { StyleSheet } from "react-native";

// Exporta o style para ser usado por todo o código

export const styles = StyleSheet.create({

BackgroundColorView: {
   backgroundColor: "#d9d9d9",
   flex: 1,
},

container1: {
    top: 225,
    left: 170,
    width: 500,
    height: 500,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
      },

container2: {
    bottom: 275,
    left: 1100,
    width: 500,
    height: 500,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
          },

TxtInput: {
    borderColor: "black",
    borderWidth: 2,
    height: 50,
    opacity: "35%",
    fontSize: 20,
},

btn: {
  backgroundColor:"#ff006a",
  width: 100,
  height: 40,
  alignItems: "center",
  justifyContent: "center",
  
},

txt: {
 borderRadius: 50,
 height: 50,
},

});