export interface CarSpec{
    make: string;
    model: string;
}

export interface Car {
    name: string;
    cars: {
        [key: string]: CarSpec
    };
}