import {useState} from 'react'

import { View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'

export default function ListaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);

    async function buscarUsuarios() {
        try {
            const resposta = await fetch(
                'http//172.20.91.200:3000/usuarios'
            );
            const dados = await resposta.json();
            setUsuarios(dados);
        } catch (erro) {
            alert.apply('Erro ao buscar usuarios', erro)
        }
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.botao}
                onPress={buscarUsuario}
                >
                    <Text style={styles.textBotao}>
                        Buscar Usuario
                    </Text>
            </TouchableOpacity>
        </View>
    )
}