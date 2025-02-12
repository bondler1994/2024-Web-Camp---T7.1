const addTaskButton = document.querySelector(".main__body");
function clickToAddTask() {
  addTaskButton.innerHTML += `
    <div class="main__body">
          <div class="mission">
            <div class="mission__item add">
              <div class="add__header">
                <input type="checkbox" id="Prepare" />
                <label for="Prepare"></label>
                <div class="">
                  <span>Cloud add with Dannie</span>
                </div>
              </div>
              <div class="add__body">
                <!-- <i class="fa-regular fa-star"></i> -->
                <i class="fa-regular fa-star"></i>
                <!-- <i class="fa-light fa-pen"></i> -->
                <i class="fa-solid fa-pen" style="color: #74c0fc"></i>
              </div>
            </div>
            <!-- infor -->
            <div class="mission__item infor">
              <div class="infor__item">
                <div class="date">
                  <div class="date__header">
                    <i class="fa-regular fa-calendar-days"></i>
                    <span>Deadline</span>
                  </div>
                  <div class="date__body">
                    <input type="date" />
                    <input type="time" />
                  </div>
                </div>
                <div class="file">
                  <div class="file__header">
                    <i class="fa-light fa-file"></i>
                    <span>File</span>
                  </div>
                  <div class="file__body">
                    <label for="file">＋</label>
                    <input type="file" id="file" />
                  </div>
                </div>
                <div class="text">
                  <div class="text__header">
                    <i class="fa-regular fa-comment-dots"></i>
                    <span>Comment</span>
                  </div>
                  <div class="text__body">
                    <textarea name="" id="" placeholder="meet him at Lorence Cafe"></textarea>
                  </div>
                </div>
                <div class="submit">
                  <button class="submit__header">X Cancel</button>
                  <button class="submit__body">＋ Add Task</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    `;
}
