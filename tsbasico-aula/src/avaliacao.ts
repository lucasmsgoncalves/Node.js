import { prompt } from 'inquirer';
import {VpHttp} from './http/vphttp';


export class Avaliacao {
    private arrayCategorias : any = [];
    private arrayProdutos : any = [];
    private arrayQuantidades : any = [];
    private categorias : any = [];
    // private produtos : any = [];
    // private quantidades : any = [];

    public getCategorias(){

        new VpHttp('http://5c6c7bf2d51de300146f5b68.mockapi.io/categorias').get().subscribe(
            (data : any) => {
                data.forEach((element : any) => {
                // this.sabores = element.Sabor;
                this.arrayCategorias.push(element.Categoria);
                console.log(this.arrayCategorias); 
                });
                this.getProdutos();
            },
            (error : any) => {
                console.log("Não foi possível buscar dados na inicialização do programa");
                console.log(error);
            }
        );
    }

    public getProdutos(){

        new VpHttp('http://5c6c7bf2d51de300146f5b68.mockapi.io/produtos').get().subscribe(
            (data : any) => {
                data.forEach((element : any) => {
                // this.sabores = element.Sabor;
                this.arrayProdutos.push(element);
                // this.arrayQuantidades.push(element.Quantidade);

                console.log(this.arrayProdutos); 
                console.log(this.arrayQuantidades);
                });
                this.consultarEstoque();
            },
            (error : any) => {
                console.log("Não foi possível buscar dados na inicialização do programa");
                console.log(error);
            }
        );
    }

    public consultarEstoque(){
        prompt(
            [
                {
                    name: 'categoria',
                    type: 'list',
                    message: 'ESCOLHA UMA CATEGORIA DE PRODUTOS:\n',
                    choices: this.arrayCategorias
                }
            ]
        ).then (
            (data : any) => {
                // this.categorias = data
                this.arrayProdutos.forEach((objeto : any) => {
                    console.log("Element:"+ JSON.stringify(objeto));
                    console.log(JSON.stringify(data));
                    if (data.categoria === objeto.Categorias) {
                        this.imprimirRelatorioEstoque(objeto.Produto, objeto.Quantidade);
                    }
                    else {
                        console.log("Deu ruim");
                    }
                });
            }
        )
    }

    public imprimirRelatorioEstoque(produto : any, quantidade : any){
        console.log("PRODUTO:" + produto + " | QUANTIDADE: "+quantidade);
    }
}