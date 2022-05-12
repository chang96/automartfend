export default class Sb {
    constructor(){
        this.uri = 'https://immense-springs-41703.herokuapp.com/'
    }
    async getCars (){
        try {
            const res = await fetch(`${this.uri}cars/all`).then(data=> data.json())
            return res
        } catch (e){
            console.log(e)
        }
    }

    async postAds(option){
        try{
            const res = await fetch(`${this.uri}cars/create`, option).then(data=> data.json())
            return res
        }catch(e){
            console.log(e)
        }
    }

    async deleteAds(id){
        try{
            const res = await fetch(`${this.uri}cars/delete?id=${id}`, {method:"DELETE"} ).then(data=> data.json())
            return res
        }catch(e){
            console.log(e)
        }
    }

   
}

export const sb = new Sb() 


//https://powerful-woodland-66566.herokuapp.com











