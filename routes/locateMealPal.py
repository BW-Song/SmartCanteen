"""
Here to implement feature:
locate a meal pal
"""

class seat:
    nameList = []
    poseList = []

    def __init__(self,pose):
        seat.poseList = pose
        seat.nameList = [""] * len(seat.poseList)
    
    @classmethod
    def locateMealPal(self,name):
        if name in seat.nameList:
            return self.poseList[self.nameList.index(name)]
        else:
            return [0,0]
        

    def setMyPosition(self,pose,name):
        seat.nameList[seat.poseList.index(pose)] = name

# usage:
# if __name__ == '__main__':
#     a = [0,1]
#     b = [2,3]
#     c = [4,5]
#     pose = [a,b,c]
#     cat = seat(pose)
#     cat.setMyPosition(a,"song")
#     cat.setMyPosition(b,"bo")
#     cat.setMyPosition(c,"wen")
#     curPose = cat.locateMealPal("tong")
#     if curPose == [0,0]:
#         print("Not in the list")
#     else:
#         print(curPose[0])