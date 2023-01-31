const product = 'Socks'

const app = Vue.createApp({
    data(){ //returns a map of the object
        return {
            product : 'Socks',
            description : 'Live Together. Die Alone.'
        }

    }
}); //pass an object into create app