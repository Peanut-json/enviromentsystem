export interface Environment {

    id: string ,
    status: number ,
    title: string, // whitch enviroment set they are apart of 
    name: string // the name of the individual enviroment given 
}

export type EnvironmentStatus = {

    statusId: number,
    description: string,
    environments: Environment []
}