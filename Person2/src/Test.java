
public class Test{
  public static void main(String[] args){

	  Person taro= new Person();
	  taro.name="taro";
	  taro.age=18;
	  System.out.println(taro.name);
	  System.out.println(taro.age);

	  Person jiro=new Person("jiro",20);
	  System.out.println(jiro.name);
	  System.out.println(jiro.age);

	  Person subro=new Person("subro",0);
	  System.out.println(subro.name);
	  System.out.println(subro.age);

	  Person 名前なし=new Person("名前なし",25);
	  System.out.println(名前なし.name);
	  System.out.println(名前なし.age);

	  Person hanako=new Person("hanako",17);
	  System.out.println(hanako.name);
	  System.out.println(hanako.age);
  }
}