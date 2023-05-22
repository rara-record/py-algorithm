# node를 만든다.

# node는 value와 address를 가지고 있다.

class Node():
  def __init__(self, value):
    self.value = value
    self.next = None
    
# linkedList는 node로 이루어져 있다.


class LinkedList(Node):
    # node는 head로부터 출발한다.
    def __init__(self):
        self.head = None

    # 노드를 생성한다
    def append(self, value):
        new_node = Node(value)
        # head는 첫번째 노드를 가리킨다
        if self.head is None:
            self.head = new_node
        else:
            # 변수 선언, self.head가 가리키는 곳을 가리킨다
            # 즉 첫번째 노드를 가리킨다.
            current = self.head
            # current.next 가 None이 될때까지, 
            # 즉 마지막 노드일때까지 head부터 시작하여 쭈욱 list를 타고간다.
            while(current.next):
                current = current.next
            current.next = new_node
    
list = LinkedList()
list.append(1)
list.append(2)



    

      
  
