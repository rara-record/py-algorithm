# node를 만든다.

# node는 value와 address를 가지고 있다.

class Node():
    def __init__(self, value):
        self.value = value
        self.next = None

# linkedList는 node로 이루어져 있다.


class LinkedList(Node):

    def __init__(self):
        self.head = None

    def append(self, value):  # 마지막에 노드 추가
        new_node = Node(value)

        if self.head is None:
            self.head = new_node
        else:
            current = self.head
            while (current.next):
                current = current.next
            current.next = new_node

    def get(self, idx):
        current = self.head
        for _ in range(idx):
            current = current.next
        return current.value

    def insert(self, idx, value):
        new_node = Node(value)
        if (idx == 0):
            new_node.next = self.head
            self.head = new_node
        else:
            current = self.head
            for _ in range(idx - 1):
                current = current.next
            new_node.next = current.next
            current.next = new_node


list = LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.insert(1, 10)
print(list.get(1))


# get(O(n)) : 노드 가지고 오기
# 1. head로 부터 출발
# 2. head가 가리키는 곳을 가리키기
# 3. 지정한 노드까지 이동

# lnsert_at (): 중간에 노드를 삽입하기
# 맨 첫번째에 삽입할 경우
# - new_node의 next를 head가 가리키는 곳을 가리키기
# - head를 new_node 로 업데이트하기, 즉 head가 new_node를 가리키게 한다.

# 0. 노드를 생성한다
# 1. head로부터 출발
# 2. head가 가리키는 곳
# 3. new_node의 바로 전까지 이동
# 4. current의 next를 new_node.next가 가리키도록 한다
# 5.  current.next 는 new_node를 가리키게 한다
