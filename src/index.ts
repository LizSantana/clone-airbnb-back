import { connect } from 'mongoose';
import app from './app';

const uri = process.env.MONGO_URL || 'mongodb+srv://laranjinha:oRange@cluster0.ooj0o.mongodb.net/sample_airbnb?retryWrites=true&w=majorit';

async function main() {
    try {
        await connect(uri);
        console.log('Conectado ao MongoDb Atlas');

        app.listen(app.get('port'), () => {
            console.log('Express na porta:', app.get('port'));
            console.log('Express no modo:', app.get('env'));
        });
    } catch (error) {
        console.log('Falha de acesso ao BD:');
        console.error(error);
    } /*finally {
        await disconnect();
        console.log('Desconectado do MongoDb Atlas');
    }*/
}

main();