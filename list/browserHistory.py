# https://leetcode.com/problems/design-browser-history/

# 제약 조건
# 1 <= homepage.length <= 20
# 1 <= url.length <= 20
# 1 <= steps <= 100
# homepage와 url은 '.' 을 포함한 lowercase
# visit, back, forward 최대 5000번 호출

class ListNode(object):
    def __init__(self, value=0, next=None, prev=None):
        self.value = value
        self.next = next
        self.prev = prev


class BrowserHistory(object):
    def __init__(self, homepage):
        # 같은 곳을 바라보는 노드를 두개 생성하기.
        self.head = self.current = ListNode(value=homepage)

    def visit(self, url):
        self.current.next = ListNode(value=url, prev=self.current)
        self.current = self.current.next
        return None

    def back(self, steps):
        while steps > 0 and self.current.prev != None:  # steps이 남아있거나, 맨 앞까지 오지 않은 경우
            steps = - 1
            self.current = self.current.prev
        return self.current.value

    def forward(self, steps):
        while steps > 0 and self.current.next != None:  # steps이 남아있거나, 맨 앞까지 오지 않은 경우
            steps = -1
            self.current = self.current.next
        return self.current.value


browserHistory = BrowserHistory('naver.com')
browserHistory.visit('google.com')
browserHistory.visit('facebook.com')
browserHistory.visit('youtube.com')
browserHistory.back(1)
browserHistory.back(1)
browserHistory.forward(1)

browserHistory.visit('linkedin.com')
browserHistory.back(7)
print(browserHistory.forward(1))
