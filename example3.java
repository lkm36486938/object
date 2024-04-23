class Parent {
    String name;

    Parent(String name) {
        this.name = name;
    }

    int pay() {
        return 5000;
    }

    int brush() {
        return 7;
    }
}

class Child extends Parent {
    Child(String name) {
        super(name);
    }

    int brush(int duration) {
        // 자식 클래스에서는 브러시 사용 시간에 따라 다른 청결도를 반환
        return 3 * duration;
    }
}

public class Main {
    public static void main(String[] args) {
        Parent parent = new Parent("Parent");
        Child child = new Child("Child");

        System.out.println("부모: " + parent.pay());
        System.out.println("자식: " + child.pay());
        System.out.println("-------------------------------");
        System.out.println("부모: " + parent.brush());
        // 자식 클래스의 오버로딩된 brush 메서드 호출
        System.out.println("자식: " + child.brush(2)); // 브러싱 시간을 전달하여 호출
    }
}
