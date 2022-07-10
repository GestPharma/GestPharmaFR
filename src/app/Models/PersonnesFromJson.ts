export class PersonnesFj {
public static fromJson(json: PersonnesFj) : PersonnesFj {
  return new PersonnesFj (
    Number(json['Id']),
    json['email'],
    json['paswword'],
    !!json['isactive'],
    Number(json['currentrole']),
    json['connectAs']
    );
}
constructor (
  public Id : number,
  public email : string,
  public paswword : string,
  public isactive : boolean,
  public currentrole : number,
  public connectAs : string)
  {}
}
