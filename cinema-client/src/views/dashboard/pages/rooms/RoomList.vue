<template>
  <v-container
    id="room-list"
    fluid
    tag="section"
  >
    <h1>Room list</h1>

    <base-material-card class="px-5 py-3">
      <template v-slot:heading>
        <v-tabs
          v-model="tabs"
          background-color="transparent"
          slider-color="white"
        >
              <span
                class="subheading font-weight-light mx-3"
                style="align-self: center"
              >Schedule</span>
          <v-tab>
            Monday
          </v-tab>
          <v-tab>
            Tuesday
          </v-tab>
          <v-tab>
            Wednesday
          </v-tab>
          <v-tab>
            Thursday
          </v-tab>
          <v-tab>
            Friday
          </v-tab>
          <v-tab>
            Saturday
          </v-tab>
          <v-tab>
            Sunday
          </v-tab>
        </v-tabs>
      </template>

      <v-tabs-items
        v-model="tabs"
        class="transparent"
      >
        <v-tab-item
          v-for="n in 7"
          :key="n"
        >
          <v-card-text>
            <v-simple-table>
              <thead>
              <tr>
                <th class="primary--text">
                  Movie
                </th>
                <th class="primary--text">
                  Time
                </th>
                <th class="primary--text">
                  Users
                </th>
                <th class="primary--text">
                  Status
                </th>
                <th class="text-right primary--text">
                </th>
              </tr>
              </thead>

              <tbody v-for="room in schedule[tabs]" :key="room.id">
              <Room v-bind:room="room"/>
              </tbody>
            </v-simple-table>
          </v-card-text>
        </v-tab-item>
      </v-tabs-items>
    </base-material-card>

  </v-container>
</template>

<script>
  export default {
    name: 'RoomList',
    components: {
      Room: () => import('./Room'),
    },
    data ()
    {
      return {
        rooms: [
          {
            movie: "movie 1",
            time: "time 1",
            users: [
              {
                name: "John"
              },
              {
                name: "Mike"
              },
              {
                name: "Lucy"
              },
              {
                name: "Alice"
              }
            ],
            status: "status 1"
          },
          {
            movie: "movie 1",
            time: "time 1",
            users: [
              {
                name: "John"
              },
              {
                name: "Mike"
              },
              {
                name: "Lucy"
              },
              {
                name: "Alice"
              }
            ],
            status: "status 1"
          },
          {
            movie: "movie 1",
            time: "time 1",
            users: [
              {
                name: "John"
              },
              {
                name: "Mike"
              },
              {
                name: "Lucy"
              },
              {
                name: "Alice"
              }
            ],
            status: "status 1"
          },
          {
            movie: "movie 1",
            time: "time 1",
            users: [
              {
                name: "John"
              },
              {
                name: "Mike"
              },
              {
                name: "Lucy"
              },
              {
                name: "Alice"
              }
            ],
            status: "status 1"
          }
        ],
        tabs: 0,
        schedule: {
          0: [
            {
              movie: "movie 1",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            },
            {
              movie: "movie 1",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            },
            {
              movie: "movie 1",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            },
            {
              movie: "movie 1",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            }
          ],
          1: [
            {
              movie: "movie 2",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            },
            {
              movie: "movie 1",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            },
            {
              movie: "movie 1",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            },
            {
              movie: "movie 1",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            }
          ],
          2: [
            {
              movie: "movie 3",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            },
            {
              movie: "movie 1",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            },
            {
              movie: "movie 1",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            },
            {
              movie: "movie 1",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            }
          ],
          3: [
            {
              movie: "movie 4",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            },
            {
              movie: "movie 1",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            },
            {
              movie: "movie 1",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            },
            {
              movie: "movie 1",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            }
          ],
          4: [
            {
              movie: "movie 5",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            },
            {
              movie: "movie 1",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            },
            {
              movie: "movie 1",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            },
            {
              movie: "movie 1",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            }
          ],
          5: [
            {
              movie: "movie 6",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            },
            {
              movie: "movie 1",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            },
            {
              movie: "movie 1",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            },
            {
              movie: "movie 1",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            }
          ],
          6: [
            {
              movie: "movie 7",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            },
            {
              movie: "movie 1",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            },
            {
              movie: "movie 1",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            },
            {
              movie: "movie 1",
              time: "time 1",
              users: [
                {
                  name: "John"
                },
                {
                  name: "Mike"
                },
                {
                  name: "Lucy"
                },
                {
                  name: "Alice"
                }
              ],
              status: "status 1"
            }
          ],
        },
      }
    }
  }
</script>

<style scoped>

</style>
