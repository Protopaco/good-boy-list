import fetch from 'superagent';

const API_URL = "https://protected-fortress-51085.herokuapp.com";


export async function fetchPostDog(objectToSend) {

    await fetch.post(API_URL + '/dogs/')
        .send(objectToSend);
}

export async function fetchGetBreeds() {
    return await fetch.get(API_URL + '/breeds/')
}

export async function fetchGetDogs() {
    return await fetch.get(API_URL + '/dogs/')
}

export async function fetchPutDog(objectToUpdate, id) {
    await fetch.put(API_URL + '/dogs/' + id)
        .send(objectToUpdate)
}

export async function fetchDogById(dog_id) {
    return await fetch.get(API_URL + '/dogs/' + dog_id);
}

export async function fetchDeleteDog(dog_id) {
    await fetch.delete(API_URL + '/dogs/' + dog_id);
}