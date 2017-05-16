
export interface IBddNode {
     isOne: ()=> boolean; 
     isZero: ()=> boolean;
}

class OneNode implements IBddNode {
    isOne = () => true;
    isZero = () => false;
}

class ZeroNode implements IBddNode {
    isOne = () => false;
    isZero = () => true;
}

export function one():IBddNode {
    return new OneNode();
}

export function zero():IBddNode {
    return new ZeroNode();
}

