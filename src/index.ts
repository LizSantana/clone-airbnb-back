import { connect, disconnect, ObjectId, SchemaTypes } from 'mongoose';
import { LocacaoModel } from './persistencia/locacaoModel';
import { ProprietarioModel } from './persistencia/proprietarioModel';
import { ClienteModel } from './persistencia/clienteModel';
import { DateTimeModel } from './persistencia/dateTimeModel';
import { ReciboModel } from './persistencia/reciboModel';
import { ReservaModel } from './persistencia/reservaModel';
import * as locacaoRepositorio from './persistencia/locacaoRepositorio';

const uri = 'mongodb+srv://laranjinha:oRange@cluster0.ooj0o.mongodb.net/sample_airbnb?retryWrites=true&w=majorit';
const urilocal = 'mongodb://localhost:27017';

async function main() {
    try {
        await connect(uri);
        console.log('Conectado ao MongoDb Atlas');

        
        //inserir um proprietário
        /*const proprietarioInserido = await ProprietarioModel.create({
            nome: "Carolina Dias",
            cpf: "02345678911",
            cep: "41940750",
            logradouro: "Avenida Alto da Sereia",
            complemento: "Apartamento",
            bairro: "Rio Vermelho",
            localidade: "Salvador",
            uf: "BA",
        })*/
        // inserindo uma locação
        /*const locacaoInserida = await LocacaoModel.create({
            locacao_nome: 'Venha aprveitar a melhor vista mar da Bahia!!!',
            cep: "41940750",
            logradouro: "Avenida Alto da Sereia",
            complemento: "Apartamento",
            bairro: "Rio Vermelho",
            localidade: "Salvador",
            uf: "BA",
            descricao_longa: "Duas suítes, nascente, próximo da praia, bons restaurantes perto",
            descricao_curta: "Flat inteiro no Rio Vermelho",
            preco: 201.00,
            proprietario_id: Object("618b4307603ef4ce00c61f3d"),
            capacidade: 4,
            ultimo_update: new Date()
        });*/
        /*const locacaoInserida = await LocacaoModel.create({
            locacao_nome: 'Chalé em Ubatuba próximo à famosa praia do Lázaro!',
            cep: "17510985",
            logradouro: "Rua São Domingos",
            complemento: "Chalé",
            bairro: "Ribeira",
            localidade: "Ubatuba",
            uf: "SP",
            descricao_longa: "Chalé totalmente equipado, com café da manhã incluso, WiFi, 2 camas de casal",
            descricao_curta: "Chalé totalmente equipado em Ubatuba",
            preco: 270.00,
            proprietario_id: proprietarios[0],
            capacidade: 4,
            ultimo_update: new Date()
        });*/

        //inserindo cliente
        /*const clienteInserido = await ClienteModel.create({
            nome: 'Edineia Silva',
            cep: "40243300",
            logradouro: "Vila Amanda",
            complemento: "(B V Brotas)",
            bairro: "Engenho Velho de Brotas",
            localidade: "Salvador",
            uf: "BA",
        });*/
        //inserindo Datas
        /*const dataInserida = await DateTimeModel.create({
            date_point: new Date(),
            check_in: new Date(2021, 11, 26),
            ckeck_out: new Date(2021, 12, 20),
            
        });*/
        // inserindo recibos
        /*const reciboInserido = await ReciboModel.create({
            cliente_id: Object("618b48e1f0e94827eedd8fed"),
            data_pagamento: new Date(2021,12,20),
            dias_reserva: 24,
            montante: 4824.00
        })*/
        //inserindo reserva
        /*const ObjectId = SchemaTypes.ObjectId;
        const reservaInserida = await ReservaModel.create({
            locacao_id: LocacaoModel.aggregate([
                {
                    $match: {_id: new ObjectId("618b471eb55d02fd62d9f76d")},

                }
            ]),
            proprietario_id: Object("618b4307603ef4ce00c61f3d"),
            cliente_id: Object("618b48e1f0e94827eedd8fed"),
            recibos_id: Object("618b4d6f335ddb7cbc8ba76e"),
            data_inicio: new Date(),
            data_fim: new Date(2021,12,20)
        })

        console.log('Inserido:');
        console.log(reservaInserida);
        */
        /*
        //consultar todas as pessoas como documentos
        const pessoas = await PessoaModel.find().exec();
        console.log('Resultado da consulta:');
        //console.log(pessoas);*/
        //consultar todas as pessoas como objetos simples
        const locacoes = await LocacaoModel.find().lean();
        console.log('Resultado da consulta:');
        //console.log(locacoes);

        let locacaoBA = await locacaoRepositorio.buscarPorUF('SP');
        //console.log(locacaoBA);

        let capacidadeDeQuatroPessoas = await locacaoRepositorio.buscarPorCapacidade(3);
        //console.log(capacidadeDeQuatroPessoas);

        let buscarPreco = await locacaoRepositorio.buscarPorPreco(250);
        console.log(buscarPreco);


        /*
        const numero = await PessoaModel.where('idade').lte(18).countDocuments().exec();
        console.log('Resultado da consulta:');
        console.log(numero);
        */
        /*
        //modificar um documento em memória e salvar no banco
        const documento = await PessoaModel.findById('6169c1832e17f3fc22b790f8').exec();
        if (documento != null) {
            documento.idade = 30;
            documento.email = 'outro@gmail.com';
            const documentoAtualizado = await documento.save();
            console.log('Resultado da alteração:');
            console.log(documentoAtualizado);
        }
        */
        //remover um documento em memória e salvar no banco
       /* const documento = await LocacaoModel.findById('6169c1832e17f3fc22b790f8').exec();
        if (documento != null) {
            const documentoRemovido = await documento.remove();
            console.log('Resultado da remoção:');
            console.log(documentoRemovido);
        }*/
    } catch (error) {
        console.log('Falha de acesso ao BD:');
        console.error(error);
    } finally {
        await disconnect();
        console.log('Desconectado do MongoDb Atlas');
    }
}

main();